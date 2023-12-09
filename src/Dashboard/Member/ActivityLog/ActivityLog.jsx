import useAuth from "../../../Hooks/useAuth";
import usePackage from "../../../Hooks/usePackage";

const ActivityLog = () => {
    const { user } = useAuth()
    console.log(user);
    const [Package] = usePackage()
    console.log(Package);

    const activityEmail = Package.filter(Packages => Packages.Useremail === user.email)




    return (
        <div>
            <h2 className="sm:text-4xl text-2xl font-extrabold mb-16  bg-gradient-to-r from-blue-600 to-indigo-900  shadow-lg p-5 border-r-8 rounded-lg">{user.displayName} Your Trainnig Log</h2>
            <div className="flex justify-center items-center">
            
            {
                activityEmail.map(activity => <div key={activity._id} className="relative flex bg-clip-border rounded-xl bg-white text-gray-700 shadow-md w-full max-w-[48rem] flex-row">
                <div
                  className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0">
                  <img
                    src={activity.trainerImage}
                    alt="card-image" className="object-cover w-full h-full" />
                </div>
                <div className="p-6">
                  <h6
                    className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-gray-700 uppercase">
                   Your Trainer : {activity.trainerName}
                  </h6>
                  <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                   Package : {activity.packageName}
                  </h4>
                  <h6
                    className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-gray-700 uppercase">
                   Your Classes : {activity.classesIncluded}
                  </h6>
                  <h6
                    className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-gray-700 uppercase">
                   Facilities : {activity.facilities}
                  </h6>
                  
                </div>
              </div>  )
            }
        </div>
        </div>
    );
};

export default ActivityLog;