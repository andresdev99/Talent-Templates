

//Métodos básicos de PHP para XML spider

//Replace

$loc = str_replace("Anywhere, ","", $loc);

//split

if(strpos($job['title'], '–')>-1){
    $htmltmp = explode("–", $job['title']);
    $job['title'] = $htmltmp[0];
  }


if(strpos($job['location'], '–')>-1){
$htmltmp = explode("–", $job['location']);
$job['location'] = trim((String) $htmltmp[1]) . ", Brasil";
}

// condicional. Si existe la locación "x" la locación es "y". Como funciona el if(job.location.indexOf("")>-1{job.location = "";}) en javaScript 

if(strpos($job['location'], "Attleborough")!==false){$job['location'] = "North Attleborough, MA, United States";}


// // Cuando hay un tag dentro del otro
$job['source_jobtype'] = trim((String) $j->workingTimes->item); 

// Filtrado de por fecha. 

$jobdate = trim((String) $j->date);
$valores = explode(' ', $jobdate);  //SE HACE EXPLODE POR ESPACIO
$jobdate = $valores[2]."/".$valores[1]."/".$valores[3];


///////////////////////////////////////

// Plantilla base

$city = trim((string) $j->city);
$state = trim((string) $j->state);
$country = trim((string) $j->country);
    
$arrloc=array();
if($city) $arrloc[] = $city;
if($state) $arrloc[] = $state;
if($country) $arrloc[] = $country;
$loc = implode(", ", $arrloc);

$job=array();
$job['temp']=1;
$job['title'] = (String) $j->title; 
$job['html']  = (String) $j->description;
$job['jobdesc'] = strip_tags($job["html"]);
$job['location'] = $loc; 
$job['source_jobtype'] = (String) $j->jobtype;
$job['url'] = (String) $j->url;
$job['source_empname'] = (String) $j->company;
$job['source_apply_email'] = (String) $j->contactemail;
$job['source_salary'] = (String) $j->salary;
$job['dateposted_raw'] = (String) $j->date;
$job['client_tag'] = (String) $j->category;
//print_r($job);


//////////////////////////////////////////
//Ejemplo
//Si se desea valiar un empname: 

$empname = trim((String) $j->{'company_name'});


if(strpos(strtoupper($empname), 'MOMMY JOBS ONLINE')===false){
  
$city = trim((string) $j->city);
$state = trim((string) $j->state);
    
$arrloc=array();
if($city) $arrloc[] = $city;
if($state) $arrloc[] = $state;
$loc = implode(", ", $arrloc);

$loc = str_replace("Anywhere, ","", $loc); //Replace
  
$job=array();
$job['temp'] = 1;
$job['title'] = trim((String) $j->title);
$job['html']  = (String) $j->description;
$job['jobdesc'] = $job['html'];
$job['location'] = $loc;
  
  
  
$job['url'] = trim((String) $j->link);
$job['source_empname'] = $empname;
  

}

///////////////////////////////////////////////

// Si se desean eliminar varios empnames


$empname = trim((String) $j->company);
$url = trim((String) $j->url);
$title = trim((String) $j->title);

$exceptions = array();
$exceptions['empnames'] = 'UNILIN|PRODICOM|CONTACTCARE|WTBE|Nelipak|ViriCiti|Airborne'; //Cadena de empnames a excluir
$aux = explode("|",$exceptions['empnames']); //Explode de la cadena para luego escapar caracteres especiales
foreach($aux as $e) $exceptions['empnames_quoted'][] = preg_quote($e); //preg_quote coloca barra invertida antes de cada caracter especial
$exceptions['empnames'] = implode("|",$exceptions['empnames_quoted']);//Volvemos a construir la cadena procesada
$exceptions['empnamefound'] = preg_match('/('.$exceptions['empnames'].')/ui', $empname);//Match de empnames a excluir: 1 = encontrado; 0 = no encontrado

if($exceptions['empnamefound']===0 &&
   strpos($url, "3039/2012636")===false && 
   
if(strpos(strtoupper($title), "VACATURE LOOKING")===false){ // Filtrar los títulos que contienen "VACATURE LOOKING"

  $city = trim((string) $j->locations->location->city);
  $country = trim((string) $j->locations->location->country);

  $arrloc=array();
  if($city) $arrloc[] = $city;
  if($country) $arrloc[] = $country;
  $loc = implode(", ", $arrloc);

  $job=array();
  $job['title'] = $title;
  if($loc) $job['location'] = $loc;
  else $job['location'] = 'NL';
  $job['url'] = $url;
  //$job['logo'] = trim((String) $j->logo);
  //$job['source_apply_email'] = trim((String) $j->source_apply_email);
  $job['source_empname'] = $empname;
  $job['source_jobtype'] = trim((String) $j->workingTimes->item);
  //$job['source_salary'] = trim((String) $j->salary);
  $job['html'] = (String) $j->fullDescription;
  $job['jobdesc'] = $job['html'];
  //$job['source_ppc'] = trim((String) $j->cpc);
  //$job['job_pixel'] = trim((String) $j->tracking_url);
  $job['temp']=1234;

}
}

/////////////////////////////////////////////////////////

$jobdate = trim((String) $j->date);
$valores = explode(' ', $jobdate);  //SE HACE EXPLODE POR ESPACIO
// month/day/year

$month = $valores[2];

if(strpos($month, "Jan")!== false){$month = "01";}
if(strpos($month, "Feb")!== false){$month = "02";}
if(strpos($month, "Mar")!== false){$month = "03";}
if(strpos($month, "Apr")!== false){$month = "04";}
if(strpos($month, "May")!== false){$month = "05";}
if(strpos($month, "Jun")!== false){$month = "06";}
if(strpos($month, "Jul")!== false){$month = "07";}
if(strpos($month, "Aug")!== false){$month = "08";}
if(strpos($month, "Sep")!== false){$month = "09";}
if(strpos($month, "Oct")!== false){$month = "10";}
if(strpos($month, "Nov")!== false){$month = "11";}
if(strpos($month, "Dec")!== false){$month = "12";}

$jobdate = $month."/".$valores[1]."/".$valores[3];


$job['dateposted_raw'] = $jobdate;

print_r($job['dateposted_raw']);