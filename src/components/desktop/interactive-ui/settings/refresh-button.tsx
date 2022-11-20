import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import {
  selectActions,
  setActions,
} from "../../../../features/actions/actionsSlice";
import { Tooltip, useMantineTheme } from "@mantine/core";
import { setup } from "../../../../features/banks/banksSlice";
import RefreshButton from "../../../shared-ui/components/RefreshButton";

export default function RefreshBalanceSheets() {
  const dispatch = useAppDispatch();
  const { currentLectureId } = useAppSelector(selectActions);

  function handleRefresh() {
    dispatch(setup({ id: currentLectureId }));
    dispatch(setActions({ id: currentLectureId }));
  }

  const theme = useMantineTheme();
  return <RefreshButton onClick={handleRefresh} />;
}
