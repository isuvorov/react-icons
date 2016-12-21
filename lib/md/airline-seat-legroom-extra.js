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

var MdAirlineSeatLegroomExtra = function (_React$Component) {
    _inherits(MdAirlineSeatLegroomExtra, _React$Component);

    function MdAirlineSeatLegroomExtra() {
        _classCallCheck(this, MdAirlineSeatLegroomExtra);

        return _possibleConstructorReturn(this, (MdAirlineSeatLegroomExtra.__proto__ || Object.getPrototypeOf(MdAirlineSeatLegroomExtra)).apply(this, arguments));
    }

    _createClass(MdAirlineSeatLegroomExtra, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm38 28.8q0.6 0.9 0.2 1.9t-1.3 1.5l-6.2 2.8-5.7-11.6h-11.6q-2.1 0-3.6-1.5t-1.4-3.5v-13.4h10v10h5.8q2.1 0 3 1.9l5.6 11.6 1.9-0.8q0.9-0.4 1.9-0.1t1.4 1.2z m-31.4-8.8q0 2 1.5 3.5t3.5 1.5h10v3.4h-10q-3.4 0-5.8-2.5t-2.4-5.9v-15h3.2v15z' })
                )
            );
        }
    }]);

    return MdAirlineSeatLegroomExtra;
}(React.Component);

exports.default = MdAirlineSeatLegroomExtra;
module.exports = exports['default'];