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

var FaMobile = function (_React$Component) {
    _inherits(FaMobile, _React$Component);

    function FaMobile() {
        _classCallCheck(this, FaMobile);

        return _possibleConstructorReturn(this, (FaMobile.__proto__ || Object.getPrototypeOf(FaMobile)).apply(this, arguments));
    }

    _createClass(FaMobile, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm21.9 31.4q0-0.7-0.6-1.2t-1.2-0.6-1.3 0.6-0.5 1.2 0.5 1.3 1.3 0.5 1.2-0.5 0.6-1.3z m4.6-3.5v-15.8q0-0.2-0.2-0.5t-0.5-0.2h-11.4q-0.3 0-0.5 0.2t-0.3 0.5v15.8q0 0.2 0.3 0.5t0.5 0.2h11.4q0.3 0 0.5-0.2t0.2-0.5z m-4.3-19q0-0.3-0.3-0.3h-3.6q-0.4 0-0.4 0.3t0.4 0.4h3.6q0.3 0 0.3-0.4z m6.4-0.3v22.8q0 1.2-0.8 2t-2 0.9h-11.4q-1.2 0-2.1-0.9t-0.8-2v-22.8q0-1.2 0.8-2t2.1-0.9h11.4q1.1 0 2 0.9t0.8 2z' })
                )
            );
        }
    }]);

    return FaMobile;
}(React.Component);

exports.default = FaMobile;
module.exports = exports['default'];