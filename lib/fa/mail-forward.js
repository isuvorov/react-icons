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

var FaMailForward = function (_React$Component) {
    _inherits(FaMailForward, _React$Component);

    function FaMailForward() {
        _classCallCheck(this, FaMailForward);

        return _possibleConstructorReturn(this, (FaMailForward.__proto__ || Object.getPrototypeOf(FaMailForward)).apply(this, arguments));
    }

    _createClass(FaMailForward, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm40 14.3q0 0.6-0.4 1l-11.5 11.4q-0.4 0.4-1 0.4t-1-0.4-0.4-1v-5.7h-5q-2.2 0-3.9 0.1t-3.4 0.5-3 1-2.4 1.5-1.7 2.3-1.1 3.1-0.4 4q0 1.2 0.1 2.7 0 0.2 0 0.6t0.1 0.6q0 0.3-0.2 0.5t-0.5 0.2q-0.4 0-0.6-0.3-0.2-0.2-0.3-0.5t-0.3-0.7-0.3-0.5q-2.8-6.4-2.8-10.1 0-4.4 1.2-7.4 3.6-9 19.5-9h5v-5.7q0-0.6 0.4-1t1-0.5 1 0.5l11.5 11.4q0.4 0.4 0.4 1z' })
                )
            );
        }
    }]);

    return FaMailForward;
}(React.Component);

exports.default = FaMailForward;
module.exports = exports['default'];