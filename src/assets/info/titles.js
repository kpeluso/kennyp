import skills from './skills';
import edu from './edu';
import work from './work';
import proj from './proj';
import contact from './contact';
import files from './files';

const titles = [
  {
    title: skills[0].head,
    data: skills
  },
  {
    title: edu[0].head,
    data: edu
  },
  {
    title: work[0].head,
    data: work
  },
  {
    title: proj[0].head,
    data: proj
  },
  null,
  {
    title: contact[0].head,
    data: contact
  },
  {
    title: files[0].head,
    data: files
  }
]

export default titles;

