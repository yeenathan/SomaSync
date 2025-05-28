import { Checkbox } from '@mui/material';
import { RadioButtonUnchecked, CheckCircleOutline } from '@mui/icons-material';
import { Link } from 'react-router';
import { green } from '@mui/material/colors';

export default function Category({title, subtitle=null, status="neutral", route, isChapter=false}:{title:string, subtitle:string|null, status:string, route:string, isChapter:boolean}) {
  let disabled = false;
  let checked = false;
  if (status === "disabled") disabled = true;
  else if (status === "checked") checked = true;

  return(
    !disabled?
    <Link to={route} className="border-b border-gray-600 pb-12 hover:border-[var(--blue-primary)] hover:text-[var(--blue-primary)] transition">
      <div className="flex flex-row items-start gap-2">
        {!isChapter &&
          <Checkbox icon={<RadioButtonUnchecked sx={{color: green[300]}}/>} checkedIcon={<CheckCircleOutline sx={{color: green[600]}}/>} disabled={disabled} checked={checked} style={{padding:0}}/>
        }
        <div>
          <h3 className="text-xl" style={disabled?{color: ""}:{}}>{title}</h3>
          <p>{subtitle}</p>
        </div>
      </div>
    </Link>
    :
    <div className="border-b border-gray-400 pb-12">
      <div className="flex flex-row items-start gap-2">
        {!isChapter &&
          <Checkbox icon={<RadioButtonUnchecked sx={{color: green[100]}}/>} checkedIcon={<CheckCircleOutline/>} disabled={disabled} checked={checked} style={{padding:0}}/>
        }
        <div>
          <h3 className="text-xl text-gray-400" style={disabled?{color: ""}:{}}>{title}</h3>
          <p>{subtitle}</p>
        </div>
      </div>
    </div>
  )
}