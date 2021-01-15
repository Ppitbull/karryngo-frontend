// user representation
export class User {
  name: string;
  field_surname: string;
  mail: string;
  pass: string;
  country_uuid: string;
  field_language: any[];
  field_do_you_hire_as_business = 'No';
  field_company_name = '';
  field_company_import_export_code = '';
  field_company_email = '';
  field_company_registration_numbe = ''
  field_company_website = '';
  field_company_phone = '';
  field_country_company = '';
  field_city_company = '';
  field_address_1_company = '';
  field_address_2_company = '';
  field_choose_type_of_services: any[] = [];
  field_interested_countries: any[] = [];
}