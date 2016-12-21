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

var MdFlightTakeoff = function (_React$Component) {
    _inherits(MdFlightTakeoff, _React$Component);

    function MdFlightTakeoff() {
        _classCallCheck(this, MdFlightTakeoff);

        return _possibleConstructorReturn(this, (MdFlightTakeoff.__proto__ || Object.getPrototypeOf(MdFlightTakeoff)).apply(this, arguments));
    }

    _createClass(MdFlightTakeoff, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm36.8 16.1c0.3 1.3-0.5 2.7-1.8 3-5.4 1.5-10.7 2.9-16.1 4.3l-8.8 2.4-2.7 0.8c-1.4-2.5-2.9-5-4.4-7.5l2.5-0.7 3.3 2.5 8.2-2.2-6.8-11.9 3.2-0.9 11.4 10.7 9-2.3c1.3-0.4 2.7 0.5 3 1.8z m-32.7 15.5h31.8v3.4h-31.8v-3.4z' })
                )
            );
        }
    }]);

    return MdFlightTakeoff;
}(React.Component);

exports.default = MdFlightTakeoff;
module.exports = exports['default'];