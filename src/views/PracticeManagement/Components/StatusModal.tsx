// React Imports
import { useNavigate } from "react-router-dom";
// MUI
import { Box } from "@mui/material";
// React Icons
import { IoCloseCircleOutline } from "react-icons/io5";
// Custom
import CustomModal from "../../../components/CustomModal";
import PrimaryButtonTwo from "../../../components/PrimaryButton/PrimaryButtonTwo";
import SecondaryButtonTwo from "../../../components/SecondaryButton/SecondaryButtonTwo";
import { useSetPersonStatusMutation } from "../../../redux/api/personApiSlice";
import Spinner from "../../../components/Spinner";
import ToastAlert from "../../../components/ToastAlert";
import { useSetLocationStatusMutation } from "../../../redux/api/locationApiSlice";

interface SiteStatusModalProps {
  modalOpen: boolean;
  setModalOpen: (value: boolean) => void;
  site?: boolean;
  user?: boolean;
  provider?: boolean;
  userData?: any;
}

const StatusModal = ({
  modalOpen,
  setModalOpen,
  site,
  user,
  provider,
  userData,
}: SiteStatusModalProps) => {
  const navigate = useNavigate();

  // todo: NEW USER || PROVIDER Api Bind
  const [personStatus, { isLoading }] = useSetPersonStatusMutation();

  // todo: NEW LOCATION Api Bind
  const [locationStatus, { isLoading: locationLoading }] =
    useSetLocationStatusMutation();

  const statusHandler = async () => {
    const payload = {
      isActive: !userData?.isActive,
    };

    // todo: SITE
    if (site) {
      try {
        const user: any = await locationStatus({
          status: payload,
          id: userData?.id,
        });

        const message = userData?.isActive ? "deactivated" : "activated";

        if (user?.data) {
          localStorage.setItem(
            "message",
            `Location has been successfully ${message}.`
          );
          setModalOpen(false);
          navigate(`/practice-management/view-site/${userData?.id}`);
        }

        if (user?.errors) {
          ToastAlert("Something went wrong", "error");
        }
      } catch (error) {
        console.error("User Status Error:", error);
        ToastAlert("Something went wrong", "error");
      }

      return;
    }

    // todo: USER OR PROVIDER
    if (user || provider) {
      try {
        const user: any = await personStatus({
          status: payload,
          id: userData?.id,
        });

        const message = userData?.isActive ? "deactivated" : "activated";
        const title = provider ? "Provider" : "User";
        const page = provider ? "view-provider" : "view-user";

        if (user?.data) {
          localStorage.setItem(
            "message",
            `${title} has been successfully ${message}.`
          );
          setModalOpen(false);
          navigate(`/practice-management/${page}/${userData?.id}`);
        }

        if (user?.errors) {
          ToastAlert("Something went wrong", "error");
        }
      } catch (error) {
        console.error("User Status Error:", error);
        ToastAlert("Something went wrong", "error");
      }

      return;
    }
  };

  return (
    <Box>
      <CustomModal open={modalOpen}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            cursor: "pointer",
            fontSize: 30,
            color: "#00739a",
            padding: "16px 16px 0",
          }}
          onClick={() => setModalOpen(false)}
        >
          <IoCloseCircleOutline />
        </Box>
        <Box
          sx={{
            padding: "12px 32px",
            fontSize: "20px",
            textAlign: "center",
            color: "#414042",
            fontWeight: 400,
            minHeight: "160px",
            "@media (max-width: 576px)": {
              fontSize: "16px",
              minHeight: "120px",
            },
          }}
        >
          {site ? (
            <p>
              Are you sure you want to deactivate this site? Its history will
              remain, but users will no longer be able to select it.
            </p>
          ) : user ? (
            <p>
              Are you sure you want to deactivate this user? Their history will
              remain, but they will not be able to sign in to the portal.
            </p>
          ) : provider ? (
            <p>
              Are you sure you want to deactivate this provider? Their history
              will remain, but they will not be able to sign in to the portal.
            </p>
          ) : null}
        </Box>
        <Box
          sx={{
            background: "#F3F3F3",
            padding: "15px 0",
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            "@media (max-width: 576px)": {
              gap: "30px",
            },
          }}
        >
          <SecondaryButtonTwo
            sx={{
              width: "100px",
            }}
            onClick={() => setModalOpen(false)}
          >
            No
          </SecondaryButtonTwo>
          <PrimaryButtonTwo
            sx={{
              width: "100px",
            }}
            onClick={statusHandler}
          >
            {isLoading || locationLoading ? (
              <Box
                sx={{
                  padding: "4px 30px",
                }}
              >
                <Spinner size={16} specificColor="#fff" />
              </Box>
            ) : (
              "Yes"
            )}
          </PrimaryButtonTwo>
        </Box>
      </CustomModal>
    </Box>
  );
};

export default StatusModal;
