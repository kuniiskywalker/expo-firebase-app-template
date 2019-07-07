import * as Auth from './constants/Auth'

export const submitSignIn = (params: {email: string, password: string}) => {
    return {
        type: Auth.SIGNIN_REQUEST,
        payload: {
            email: params.email,
            password: params.password,
        }
    };
};

export const submitSignOut = () => {
    return { type: Auth.SIGNOUT_REQUEST };
}

export const submitSignUp = (params: {email: string, password: string, displayName: string}) => {
    return {
        type: Auth.SIGNUP_REQUEST,
        payload: {
            email: params.email,
            password: params.password,
            displayName: params.displayName,
        }
    }
};

export const submitPasswordReminder = (params: {email: string}) => {
    return {
        type: Auth.PASSWORD_REMINDER_REQUEST,
        payload: {
            email: params.email,
        }
    }
};

export const submitFacebookLogin = () => {
    return { type: Auth.FACEBOOK_SIGNIN_REQUEST }
};

export const changeAuthedState = (user: any) => {
    return {
        type: Auth.SIGNIN_SUCCESS,
        payload: {
            ...user
        }
    }
};

export const updateProfileImage = (uri: string) => {
    return {
        type: Auth.UPDATE_PROFILE_IMAGE_REQUEST,
        payload: {
            uri
        }
    };
};
