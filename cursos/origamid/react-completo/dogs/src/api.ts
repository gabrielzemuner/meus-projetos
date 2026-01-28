const API_URL = "https://dogsapi.origamid.dev/json";
// const API_URL = "http://localhost:8000/api";

type ApiReturn = {
  url: string;
  options: RequestInit;
};

export type TokenPostBody = {
  username: string;
  password: string;
};

export type TokenPostResponse = {
  token: string;
};

export type UserPostBody = {
  username: string;
  email: string;
  password: string;
};

export type PhotosGetParams = {
  page: string;
  total: string;
  user: string;
};

export type CommentPostBody = {
  comment: string;
};

export type PasswordLostBody = {
  login: string;
  url: string;
};

export type PasswordResetBody = {
  login: string;
  key: string;
  password: string;
};

export function TOKEN_POST(body: TokenPostBody): ApiReturn {
  return {
    url: API_URL + "/jwt-auth/v1/token",
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  };
}

export function TOKEN_VALIDATE_POST(token: string): ApiReturn {
  return {
    url: API_URL + "/jwt-auth/v1/token/validate",
    options: {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
      },
    },
  };
}

export function USER_GET(token: string): ApiReturn {
  return {
    url: API_URL + "/user",
    options: {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    },
  };
}

export function USER_POST(body: UserPostBody): ApiReturn {
  return {
    url: API_URL + "/user",
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  };
}

export function PHOTO_POST(formData: FormData, token: string): ApiReturn {
  return {
    url: API_URL + "/photo",
    options: {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
      },
      body: formData,
    },
  };
}

export function PHOTOS_GET({
  page,
  total,
  user = "0",
}: PhotosGetParams): ApiReturn {
  return {
    url: `${API_URL}/photo/?_page=${page}&_total=${total}&_user=${user}`,
    options: {
      method: "GET",
      cache: "no-store", // desabilitar cache -> se o cache fica habilitado, ao postar uma foto nova, ela não aparece...
    },
  };
}

export function PHOTO_GET(id: string): ApiReturn {
  return {
    url: `${API_URL}/photo/${id}`,
    options: {
      method: "GET",
      cache: "no-store", // desabilitar cache -> se o cache fica habilitado, ao postar uma foto nova, ela não aparece...
    },
  };
}

export function COMMENT_POST(id: string, body: CommentPostBody): ApiReturn {
  return {
    url: `${API_URL}/comment/${id}`,
    options: {
      method: "POST",
      cache: "no-store", // desabilitar cache -> se o cache fica habilitado, ao postar uma foto nova, ela não aparece...
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + window.localStorage.getItem("token"), // como exemplo, aqui o token será chamado direto, mas o ideal é seguir o padrão das funções acima (usando token como parâmetro da função)
      },
      body: JSON.stringify(body),
    },
  };
}

export function PHOTO_DELETE(id: string): ApiReturn {
  return {
    url: `${API_URL}/photo/${id}`,
    options: {
      method: "DELETE",
      cache: "no-store", // desabilitar cache -> se o cache fica habilitado, ao postar uma foto nova, ela não aparece...
      headers: {
        Authorization: "Bearer " + window.localStorage.getItem("token"), // como exemplo, aqui o token será chamado direto, mas o ideal é seguir o padrão das funções acima (usando token como parâmetro da função)
      },
    },
  };
}

export function PASSWORD_LOST(body: PasswordLostBody): ApiReturn {
  return {
    url: `${API_URL}/password/lost`,
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  };
}

export function PASSWORD_RESET(body: PasswordResetBody): ApiReturn {
  return {
    url: `${API_URL}/password/reset`,
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  };
}

export function STATS_GET(): ApiReturn {
  return {
    url: `${API_URL}/stats`,
    options: {
      method: "GET",
      headers: {
        Authorization: "Bearer " + window.localStorage.getItem("token"), // como exemplo, aqui o token será chamado direto, mas o ideal é seguir o padrão das funções acima (usando token como parâmetro da função)
      },
    },
  };
}
