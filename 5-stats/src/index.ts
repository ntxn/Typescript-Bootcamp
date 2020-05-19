import { MatchReader } from './MatchReader';
import { Summary } from './Summary';

// Create an instance of MatchReader and pass in something satisfying the 'DataREader' interface
const matchReader = MatchReader.fromCsv('football.csv');
const summary = Summary.winsAnalysisWithHtmlReport('Man United');

matchReader.load();
summary.buildAndPrintReport(matchReader.matches);
