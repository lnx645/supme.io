import { useEffect } from "react";
import { useNavigation } from "react-router";
import { toast } from "sonner";

export const useLoadingPage = () => {
  const navigation = useNavigation();
  let loadingId: any;
  useEffect(() => {
    console.log(navigation.state);
    if (navigation.state == "loading") {
      loadingId = toast.loading("Loading...");
    } else {
      toast.dismiss(loadingId);
    }
    return ()=>{
        toast.dismiss(loadingId)
    }
  }, [navigation.state]);
};
