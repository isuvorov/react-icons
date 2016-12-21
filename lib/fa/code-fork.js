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

var FaCodeFork = function (_React$Component) {
    _inherits(FaCodeFork, _React$Component);

    function FaCodeFork() {
        _classCallCheck(this, FaCodeFork);

        return _possibleConstructorReturn(this, (FaCodeFork.__proto__ || Object.getPrototypeOf(FaCodeFork)).apply(this, arguments));
    }

    _createClass(FaCodeFork, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm14.9 32.9q0-0.9-0.6-1.6t-1.5-0.6-1.5 0.6-0.7 1.6 0.7 1.5 1.5 0.6 1.5-0.6 0.6-1.5z m0-25.8q0-0.8-0.6-1.5t-1.5-0.6-1.5 0.6-0.7 1.5 0.7 1.6 1.5 0.6 1.5-0.6 0.6-1.6z m14.3 2.9q0-0.9-0.6-1.5t-1.5-0.6-1.5 0.6-0.7 1.5 0.7 1.5 1.5 0.6 1.5-0.6 0.6-1.5z m2.2 0q0 1.2-0.6 2.2t-1.6 1.5q0 6.4-5 9.2-1.6 0.9-4.6 1.9-2.8 0.8-3.7 1.5t-1 2.3v0.5q1 0.6 1.6 1.6t0.6 2.2q0 1.7-1.3 3t-3 1.2-3.1-1.2-1.2-3q0-1.2 0.6-2.2t1.5-1.5v-18.4q-0.9-0.5-1.5-1.5t-0.6-2.2q0-1.7 1.3-3t3-1.2 3 1.2 1.3 3q0 1.2-0.6 2.2t-1.6 1.5v11.1q1.2-0.5 3.5-1.2 1.2-0.4 1.9-0.7t1.6-0.7 1.3-0.9 0.9-1.1 0.6-1.6 0.2-2q-1-0.6-1.5-1.5t-0.6-2.2q0-1.8 1.2-3t3.1-1.3 3 1.3 1.3 3z' })
                )
            );
        }
    }]);

    return FaCodeFork;
}(React.Component);

exports.default = FaCodeFork;
module.exports = exports['default'];