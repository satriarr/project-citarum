import myserver from "../apis/myserver";

import {
  USER_ACTION,
  ERROR_ACTION,
  AUTH_ACTION,
  NOTIFY_ACTION,
  FETCH_ACTION
} from "./actionTypes";

export const errorActionAdd = message => {
  return {
    type: ERROR_ACTION.ADD,
    payload: {
      message
    }
  };
};

export const errorActionRemove = () => {
  return {
    type: ERROR_ACTION.REMOVE
  };
};

export const authLogin = () => {
  return {
    type: AUTH_ACTION.LOGIN
  };
};

export const authLogout = () => {
  localStorage.removeItem("token");
  return {
    type: AUTH_ACTION.LOGOUT
  };
};

export const notifyAdd = message => {
  return {
    type: NOTIFY_ACTION.ADD,
    payload: {
      message
    }
  };
};

export const notifyRemove = () => {
  return {
    type: NOTIFY_ACTION.REMOVE
  };
};

export const loginUser = form => async dispatch => {
  try {
    const { email, password } = form;
    const response = await myserver.post("/auth/login", {
      email,
      password
    });
    if (response.status !== 200) {
      const error = new Error("Login gagal!");
      throw error;
    }
    dispatch(authLogin());
    localStorage.setItem("token", response.data.payload.token);
    dispatch(notifyAdd("Masuk akun berhasil!, selamat datang!"));
    dispatch({ type: USER_ACTION.CREATE, payload: response.data.payload });
  } catch (error) {
    dispatch(errorActionAdd("Masuk gagal!"));
  }
};

export const createUser = form => async dispatch => {
  try {
    const { firstname, lastname, email, password } = form;
    const response = await myserver.post("/users", {
      firstname,
      lastname,
      email,
      password
    });
    console.log(response);
    if (response.status !== 201) {
      const error = new Error("Terjadi kesalahan saat mendaftarkan user!");
      throw error;
    }
    dispatch(authLogin());
    localStorage.setItem("token", response.data.payload.token);
    dispatch(notifyAdd("Registrasi berhasil, terimakasih telah mendaftar!"));
    dispatch({ type: USER_ACTION.CREATE, payload: response.data.payload });
  } catch (error) {
    dispatch(errorActionAdd("Terjadi kesalahan saat mendaftarkan user!"));
  }
};

export const updateUser = form => async dispatch => {
  try {
    const { firstname, lastname, email, password, oldpassword, _id } = form;
    const response = await myserver.patch(
      `/users/${_id}`,
      {
        firstname,
        lastname,
        email,
        oldpassword,
        password
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      }
    );
    if (response.status !== 200) {
      const error = new Error("Terjadi kesalahan saat mendaftarkan user!");
      throw error;
    }
    dispatch(authLogin());
    localStorage.setItem("token", response.data.payload.token);
    dispatch(notifyAdd("Update informasi akun berhasil!"));
    dispatch({ type: USER_ACTION.UPDATE, payload: response.data.payload });
  } catch (error) {
    dispatch(notifyAdd("Update informasi akun gagal!"));
  }
};

export const userTokenVerify = token => async dispatch => {
  try {
    const response = await myserver.post("/auth/verify", {
      token
    });
    if (response.status !== 200) {
      const error = new Error("Token tidak dapat diverifikasi!");
      localStorage.removeItem("token");
      throw error;
    }
    dispatch(authLogin());
    localStorage.setItem("token", token);
    dispatch({ type: USER_ACTION.VERIFY, payload: response.data.payload });
  } catch (error) {
    localStorage.removeItem("token");
    dispatch(
      errorActionAdd("Token sudah tidak berlaku, silahkan masuk kembali!")
    );
  }
};

export const fetchAllUsers = () => async dispatch => {
  try {
    const token = localStorage.getItem("token");
    const response = await myserver.get("/users", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    if (response.status !== 200) {
      const error = new Error(
        "Terdapat masalah saat mendapatkan informasi pengguna!"
      );
      throw error;
    }

    console.log(response.data.users);
    dispatch({ type: FETCH_ACTION.ALL, payload: response.data.users });
  } catch (error) {
    dispatch(notifyAdd("Mendapatkan informasi seluruh pengguna gagal!"));
  }
};

export const deleteUser = _id => async dispatch => {
  try {
    const token = localStorage.getItem("token");
    const response = await myserver.delete(`/users/${_id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    if (response.status !== 200) {
      const error = new Error("Terdapat masalah saat menghapus pengguna!");
      throw error;
    }

    dispatch(notifyAdd("Pengguna terhapus!"));
    dispatch({ type: FETCH_ACTION.REMOVE, payload: { _id } });
  } catch (error) {
    dispatch(notifyAdd("Hapus pengguna gagal!"));
  }
};
