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
        {props.skills.map((skillItem) =>
            [<div><i>{skillItem.title}: </i>{skillItem.body}</div>,
             <a href='#' id="editSkill">Edit</a>]
        )}
        <br/>
      </div>
  );
};