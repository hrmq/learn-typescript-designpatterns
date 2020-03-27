import { MatchData } from './MatchData';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { HtmlReport } from './reportTargets/HtmlReports';

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  static winAnalysisWithHtmlReport(team: string): Summary {
    return new Summary(new WinsAnalysis(team), new HtmlReport());
  }

  constructor(public analyzer: Analyzer, public outputTarger: OutputTarget) {}

  buildAndPrintReport(matches: MatchData[]): void {
    const output = this.analyzer.run(matches);
    this.outputTarger.print(output);
  }
}
