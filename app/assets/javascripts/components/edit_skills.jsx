class EditSkillsListing extends React.Component {

  constructor(props) {
    super(props);
  };

  render() {
    return (
        <div>
          <ShowSkills skills={this.props.data}/>
        </div>
    );
  }
}

const ShowSkills = (props) => {
  return (
      <div>
        <p>{props.skills.body}</p>
      </div>
  );
};