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

var MdiChartAreaspline = function (_React$Component) {
    _inherits(MdiChartAreaspline, _React$Component);

    function MdiChartAreaspline() {
        _classCallCheck(this, MdiChartAreaspline);

        return _possibleConstructorReturn(this, (MdiChartAreaspline.__proto__ || Object.getPrototypeOf(MdiChartAreaspline)).apply(this, arguments));
    }

    _createClass(MdiChartAreaspline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 17.453,15.1842L 22,7.30865L 22,19L 22,21L 2,21L 2,3L 4,3L 4,15.5359L 9.49519,6.01794L 16.0071,9.77757L 20.2401,2.4457L 21.9722,3.4457L 16.7391,12.5096L 10.2272,8.74999L 4.3094,19L 6.5719,19L 10.9622,11.4367L 17.453,15.1842 Z ' })
                )
            );
        }
    }]);

    return MdiChartAreaspline;
}(React.Component);

exports.default = MdiChartAreaspline;
module.exports = exports['default'];