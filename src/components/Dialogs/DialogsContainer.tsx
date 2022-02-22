import React from 'react';
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer";
import {Dialogs, MessagesPage} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";

type MapStatePropsType = {
    dialogsPage: MessagesPage
}
type MapDispatchToProps = {
    updateNewMessageBody:(body:string) => void
    sendMessage:() => void
}
export type DialogsPropsType = MapStatePropsType & MapDispatchToProps


let mapStateToProps = (state: AppStateType) => {
  return {
      dialogsPage: state.dialogsPage
  }

}
let mapDispatchToProps = (dispatch: Dispatch) => {
  return {
      updateNewMessageBody: (body: string) => {
          dispatch(updateNewMessageBodyAC(body))
      },
      sendMessage: () => {
          dispatch(sendMessageAC())
      }
  }

}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;