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

var MdAirlineSeatFlat = function (_React$Component) {
    _inherits(MdAirlineSeatFlat, _React$Component);

    function MdAirlineSeatFlat() {
        _classCallCheck(this, MdAirlineSeatFlat);

        return _possibleConstructorReturn(this, (MdAirlineSeatFlat.__proto__ || Object.getPrototypeOf(MdAirlineSeatFlat)).apply(this, arguments));
    }

    _createClass(MdAirlineSeatFlat, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm11.9 20.2q-1.5 1.4-3.5 1.5t-3.6-1.5-1.5-3.5 1.5-3.5 3.5-1.5 3.5 1.4 1.5 3.5-1.4 3.6z m-8.5 3.2h33.2v3.2h-10v3.4h-13.2v-3.4h-10v-3.2z m33.2-5v3.2h-21.6v-10h15q2.7 0 4.7 2t1.9 4.8z' })
                )
            );
        }
    }]);

    return MdAirlineSeatFlat;
}(React.Component);

exports.default = MdAirlineSeatFlat;
module.exports = exports['default'];