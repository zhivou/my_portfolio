class EditSkillsListing extends React.Component {

  constructor(props) {
    super(props);
  };

  render() {
    return (
        <ShowSkills skills={this.props.data}/>
    );
  }
}

const ShowSkills = (props) => {
  return (
      <div>
        {props.skills.map((skill) =>
            <p>{skill.title}: {skill.body}</p>
        )}
      </div>
  );
};