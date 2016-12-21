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

var MdAirlineSeatReclineExtra = function (_React$Component) {
    _inherits(MdAirlineSeatReclineExtra, _React$Component);

    function MdAirlineSeatReclineExtra() {
        _classCallCheck(this, MdAirlineSeatReclineExtra);

        return _possibleConstructorReturn(this, (MdAirlineSeatReclineExtra.__proto__ || Object.getPrototypeOf(MdAirlineSeatReclineExtra)).apply(this, arguments));
    }

    _createClass(MdAirlineSeatReclineExtra, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm27 25l9.6 7.5-2.5 2.5-6.3-5h-11.4q-1.8 0-3.2-1.1t-1.7-3l-2.3-9.8q-0.2-1.6 0.7-2.8t2.4-1.6h0q1.8-0.2 2.9 0.7l2.8 2.1q3.7 2.9 7.8 2.1v3.6q-3.8 0.7-8.6-2l1.7 6.8h8.1z m-0.4 6.6v3.4h-11.7q-3.1 0-5.4-2t-2.9-5l-3.2-16.4h3.2l3.3 15.8q0.3 1.8 1.7 3t3.3 1.2h11.7z m-17.7-22.2q-1.1-0.8-1.3-2.2t0.5-2.4 2.2-1.4 2.4 0.5q1.1 0.9 1.4 2.2t-0.5 2.5-2.2 1.3-2.5-0.5z' })
                )
            );
        }
    }]);

    return MdAirlineSeatReclineExtra;
}(React.Component);

exports.default = MdAirlineSeatReclineExtra;
module.exports = exports['default'];