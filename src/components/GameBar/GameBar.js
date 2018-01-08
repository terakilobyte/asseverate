import React from "react"
import { LinearProgress } from "material-ui/Progress"
import Tooltip from "material-ui/Tooltip"
import { styles } from "./GameBarStyles"
import { withStyles } from "material-ui/styles"

class GameBar extends React.Component {
  constructor(props) {
    super(props)

    console.log(props)
    this.state = {
      completed: 1,
    }
  }

  componentDidMount() {
    this.timer = setInterval(this.progress, 500)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  progress = () => {
    const { completed } = this.state

    if (completed > 100) {
      this.setState({ completed: 1 })
    } else {
      this.setState({ completed: completed + 1 + Math.log(completed) })
    }
  }

  render() {
    return (
      <Tooltip title={`Population: ${this.state.completed}`} placement="right">
        <LinearProgress
          mode="determinate"
          value={this.state.completed}
          classes={this.props.classes}
        />
      </Tooltip>
    )
  }
}

export default withStyles(styles)(GameBar)
