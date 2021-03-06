/**
 * @author BounceCode, Inc.
 * @packageDocumentation
 */

import {useCallback} from 'react';
// import firebase from "firebase";
import {useSnackbar} from 'notistack';
import {FormikValues, FormikHelpers} from 'formik';

function useResetPasswordSubmitCallback() {
  const {enqueueSnackbar} = useSnackbar();

  return useCallback(
    async (
      values: FormikValues,
      formikHelpers: FormikHelpers<FormikValues>,
    ) => {
      try {
        // await firebase.auth().sendPasswordResetEmail(values.email);
        enqueueSnackbar('이메일을 확인해주세요.', {variant: 'success'});
      } catch (e) {
        console.error(e);
        enqueueSnackbar(e.message, {variant: 'error'});
      }
    },
    [],
  );
}

export default useResetPasswordSubmitCallback;
