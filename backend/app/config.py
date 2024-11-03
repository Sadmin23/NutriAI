from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    database_hostname: str
    database_port: str
    database_password: str
    database_name: str
    database_username: str
    secret_key: str
    algorithm: str
    access_token_expire_minutes: int
    secret_email: str
    app_token: str

    api_url: str
    api_key: str

    class Config:
        env_file = ".env"


settings = Settings()
