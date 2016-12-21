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

var GoSquirrel = function (_React$Component) {
    _inherits(GoSquirrel, _React$Component);

    function GoSquirrel() {
        _classCallCheck(this, GoSquirrel);

        return _possibleConstructorReturn(this, (GoSquirrel.__proto__ || Object.getPrototypeOf(GoSquirrel)).apply(this, arguments));
    }

    _createClass(GoSquirrel, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm30 2.5c-5.5 0-10 3.3-10 7.3 0 4.8 1.3 7.6 0 15.2 0-11.2-6.9-15.8-10-15.8 0.1-1.3-1.2-1.7-1.2-1.7s-0.6 0.3-0.8 0.8c-0.6-0.7-1.4-0.6-1.4-0.6l-0.3 1.4s-4.6 1.6-4.6 8.1c0.5 0.8 3.8 1.5 6.2 1 2.2 0.2 1.7 2 1.2 2.5-2.1 2.1-4.1-0.7-6.6-0.7s-2.5 2.5 0 2.5 2.5 2.5 7.5 2.5c-7.7 3 0 10 0 10h-2.5c-2.5 0-2.5 2.5-2.5 2.5h15c7.5 0 12.5-2.5 12.5-8.7 0-2.1-1.1-4.5-2.5-6.3-2.8-3.7 0.6-6.7 2.5-5s7.5 2.5 7.5-5c0-5.5-4.5-10-10-10z m-23.7 12.5c-0.7 0-1.3-0.6-1.3-1.2s0.6-1.3 1.3-1.3 1.2 0.6 1.2 1.3-0.6 1.2-1.2 1.2z' })
                )
            );
        }
    }]);

    return GoSquirrel;
}(React.Component);

exports.default = GoSquirrel;
module.exports = exports['default'];