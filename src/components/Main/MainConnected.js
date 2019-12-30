import { connect } from 'react-redux'
import { Main } from './Main';
import {
  getImageDetectingProcess,
  getImageDetectingResponse
} from '../../redux/imageDetecting/selectors'
import {
  imageDetectingLoading,
} from '../../redux/imageDetecting/reducer'


const mapStateToProps = (state) => ({
  imageDetectingProcess: getImageDetectingProcess(state),
  imageDetectingResponse: getImageDetectingResponse(state)
})

const mapDispatchToProps = dispatch => ({
  startLoading: (data) => dispatch(imageDetectingLoading(data))
})

export const MainConnected = connect(mapStateToProps, mapDispatchToProps)(Main)