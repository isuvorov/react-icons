'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdiCheckboxMultipleMarkedCircleOutline = function (_React$Component) {
    _inherits(MdiCheckboxMultipleMarkedCircleOutline, _React$Component);

    function MdiCheckboxMultipleMarkedCircleOutline() {
        _classCallCheck(this, MdiCheckboxMultipleMarkedCircleOutline);

        return _possibleConstructorReturn(this, (MdiCheckboxMultipleMarkedCircleOutline.__proto__ || Object.getPrototypeOf(MdiCheckboxMultipleMarkedCircleOutline)).apply(this, arguments));
    }

    _createClass(MdiCheckboxMultipleMarkedCircleOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 13.9987,2.0025C 9.58,2.0025 6.00125,5.58125 6.00125,10C 6.00125,14.4187 9.58,17.9975 13.9987,17.9975C 18.4175,17.9975 22.0025,14.4187 22.0025,10L 20,10C 20,13.315 17.315,16.0012 13.9987,16.0012C 10.6888,16.0012 7.9975,13.315 7.9975,10C 7.9975,6.685 10.6888,3.99875 13.9987,3.99875C 14.4287,3.99875 14.8588,4.0475 15.2738,4.14L 16.88,2.53875C 15.9625,2.1825 14.985,2.0025 13.9987,2.0025 Z M 20.5859,3.58374L 13.9987,10.1713L 11.6212,7.7925L 10.21,9.20875L 13.9987,12.9975L 22.0025,5M 4.92625,5.82C 3.07625,7.33875 2.0025,9.605 2.0025,12.0025C 2.0025,16.4162 5.58125,20 10,20C 10.635,19.995 11.265,19.9175 11.88,19.765C 10.1175,19.38 8.49125,18.525 7.1725,17.29C 5.22,16.245 3.99875,14.2137 3.99875,12.0025C 4.00375,11.7038 4.02875,11.4063 4.0725,11.1088C 4.02875,10.7425 4.00375,10.3713 3.99875,10C 4.00375,8.555 4.32125,7.12875 4.92625,5.82 Z ' })
                )
            );
        }
    }]);

    return MdiCheckboxMultipleMarkedCircleOutline;
}(React.Component);

exports.default = MdiCheckboxMultipleMarkedCircleOutline;
module.exports = exports['default'];