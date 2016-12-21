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

var MdiCloseOctagon = function (_React$Component) {
    _inherits(MdiCloseOctagon, _React$Component);

    function MdiCloseOctagon() {
        _classCallCheck(this, MdiCloseOctagon);

        return _possibleConstructorReturn(this, (MdiCloseOctagon.__proto__ || Object.getPrototypeOf(MdiCloseOctagon)).apply(this, arguments));
    }

    _createClass(MdiCloseOctagon, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 8.27125,2.9978L 2.9975,8.27125L 2.9975,15.7275L 8.27125,20.9963L 15.7275,20.9963L 21.0013,15.7275L 21.0013,8.27125L 15.7275,2.9978M 8.40875,7.0025L 12.0025,10.5913L 15.5913,7.0025L 17.0025,8.40875L 13.4087,12.0025L 17.0025,15.5913L 15.5913,17.0025L 12.0025,13.4088L 8.40875,17.0025L 7.0025,15.5913L 10.5912,12.0025L 7.0025,8.40875' })
                )
            );
        }
    }]);

    return MdiCloseOctagon;
}(React.Component);

exports.default = MdiCloseOctagon;
module.exports = exports['default'];