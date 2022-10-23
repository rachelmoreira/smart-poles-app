import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  buttonArea: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    marginTop: 30,
  },
  buttons: {
    // width: "50%",
    width: 250,
    height: 50,
    borderColor: "#374b57",
    borderWidth: 1,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#4d6979",
    marginRight: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 5,
  },
  textButton: {
    color: "#fff",
    fontSize: 20,
  },
  card: {
    backgroundColor: "#8fabbb",
    padding: 10,
    margin: 20,
    borderRadius: 16,
    paddingVertical: 20,
  },
  titleCard: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 15,
  },
  dataCard: {
    textAlign: "left",
    fontSize: 80,
    color: "#fff",
  },
  mediumDataCard: {
    textAlign: "left",
    fontSize: 15,
    color: "#fff",
    lineHeight: 25,
  },
  loginArea: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    height: 450,
    borderTopEndRadius: 100,
  },
  loginTitle: {
    fontSize: 40,
    fontWeight: "bold",
    paddingBottom: 35,
  },
  loginText: {
    fontSize: 18,
    fontWeight: "400",
    color: "#8f8e8e",
    paddingBottom: 10,
    textAlign:'center'
  },
  picker: {
    width: 300,
    height: 60,
    color:'#777f7f',
  },
});

export default styles;
