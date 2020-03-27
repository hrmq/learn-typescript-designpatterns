import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { MatchResult } from './MatchResult';
import { Summary } from './Summary';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { ConsoleReport } from './reportTargets/ConsoleReport';
import { HtmlReport } from './reportTargets/HtmlReports';

const csvFileReader = new CsvFileReader('football.csv');
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const summary1 = new Summary(
  new WinsAnalysis('Man United'),
  new ConsoleReport()
);
summary1.buildAndPrintReport(matchReader.matches);

const summary2 = Summary.winAnalysisWithHtmlReport('Man United');
summary2.buildAndPrintReport(matchReader.matches);
