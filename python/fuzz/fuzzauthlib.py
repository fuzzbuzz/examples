from authlib.integrations.requests_client import OAuth2Session

def fuzz_oauth2session(client_id, client_secret, scope):
    client = OAuth2Session(client_id, client_secret, scope=scope)
    url = client.create_authorization_url("someendpoint", response_type='token')
