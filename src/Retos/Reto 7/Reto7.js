function fixPackages(packages) {
  const regex = /\(([^()]+)\)/;
  while (regex.test(packages)) {
    packages = packages.replace(regex, (_, inner) =>
      [...inner].reverse().join(''),
    );
  }
  return packages;
}