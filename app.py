import streamlit as st
from streamlit.components.v1 import iframe

st.set_page_config(page_title="Cleaning Services", layout="wide")

st.title("Cleaning Services UI")
iframe("https://YOUR_DEPLOYED_REACT_APP_URL/", width=1200, height=800)
