import { MatchReader } from './MatchReader';
import { Summary } from './Summary';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { ConsoleReport } from './reportTargets/ConsoleReport';

const matchReader = MatchReader.fromCsv('football.csv');
matchReader.load();

const summary1 = new Summary(
  new WinsAnalysis('Man United'),
  new ConsoleReport()
);
summary1.buildAndPrintReport(matchReader.matches);

const summary2 = Summary.winAnalysisWithHtmlReport('Man United');
summary2.buildAndPrintReport(matchReader.matches);
