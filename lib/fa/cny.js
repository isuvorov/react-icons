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

var FaCny = function (_React$Component) {
    _inherits(FaCny, _React$Component);

    function FaCny() {
        _classCallCheck(this, FaCny);

        return _possibleConstructorReturn(this, (FaCny.__proto__ || Object.getPrototypeOf(FaCny)).apply(this, arguments));
    }

    _createClass(FaCny, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm22 34.3h-3.9q-0.3 0-0.5-0.2t-0.2-0.5v-7.4h-6.4q-0.3 0-0.5-0.2t-0.2-0.5v-2.3q0-0.3 0.2-0.5t0.5-0.2h6.4v-1.9h-6.4q-0.3 0-0.5-0.2t-0.2-0.5v-2.4q0-0.2 0.2-0.5t0.5-0.2h4.8l-7.2-12.9q-0.2-0.3 0-0.7 0.2-0.3 0.6-0.3h4.3q0.5 0 0.7 0.4l4.8 9.4q0.4 0.9 1.2 2.8 0.3-0.5 0.7-1.5t0.6-1.3l4.3-9.4q0.2-0.4 0.6-0.4h4.3q0.4 0 0.6 0.3 0.2 0.3 0 0.7l-7 12.9h4.8q0.3 0 0.5 0.2t0.3 0.5v2.4q0 0.3-0.3 0.5t-0.5 0.2h-6.4v1.9h6.4q0.3 0 0.5 0.2t0.3 0.5v2.3q0 0.3-0.3 0.5t-0.5 0.2h-6.4v7.4q0 0.3-0.2 0.5t-0.5 0.2z' })
                )
            );
        }
    }]);

    return FaCny;
}(React.Component);

exports.default = FaCny;
module.exports = exports['default'];