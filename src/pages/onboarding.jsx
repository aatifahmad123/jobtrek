import { useUser } from "@clerk/clerk-react";
import { BarLoader } from "react-spinners";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Onboarding = () => {
  const { user, isLoaded } = useUser();
  const navigate = useNavigate();

  const navigateUser = (currRole) => {
    navigate(currRole === "recruiter" ? "/post-job" : "/jobs");
  };

  const handleRoleSelection = async (role) => {
    await user
      .update({ unsafeMetadata: { role } })
      .then(() => {
        console.log(`Role updated to: ${role}`);
        navigateUser(role);
      })
      .catch((err) => {
        console.error("Error updating role:", err);
      });
  };

  useEffect(() => {
    if (user?.unsafeMetadata?.role) {
      navigateUser(user.unsafeMetadata.role);
    }
  }, [user]);

  if (!isLoaded) {
    return (
      <BarLoader className="mb-4" width={"100%"} color="#36d7b7"></BarLoader>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center mt-20 sm:mt-40">
      <h2 className="font-extrabold text-4xl sm:text-6xl">Select your role</h2>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full sm:w-3/4 md:w-2/3 lg:w-1/2">
        <Button
          variant="blue"
          className="h-28 text-xl sm:text-2xl"
          onClick={() => handleRoleSelection("candidate")}
        >
          Candidate
        </Button>
        <Button
          variant="green"
          className="h-28 text-xl sm:text-2xl"
          onClick={() => handleRoleSelection("recruiter")}
        >
          Employer
        </Button>
      </div>
    </div>
  );
};
export default Onboarding;
