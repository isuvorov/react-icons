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

var IoHelp = function (_React$Component) {
    _inherits(IoHelp, _React$Component);

    function IoHelp() {
        _classCallCheck(this, IoHelp);

        return _possibleConstructorReturn(this, (IoHelp.__proto__ || Object.getPrototypeOf(IoHelp)).apply(this, arguments));
    }

    _createClass(IoHelp, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm27 6c1.9 1.5 3 3.6 3 6.5 0 1.7-0.6 3.3-1.5 4.5-0.5 0.7-1.6 1.6-3.1 2.8l-1.6 1.1c-0.8 0.6-1.4 1.4-1.6 2.1-0.2 0.5-0.2 1.5-0.2 2.3 0 0.2-0.1 0.5-0.6 0.5h-4.8c-0.6 0-0.6-0.3-0.6-0.4 0.1-2 0.3-3.8 1.2-5.2 1.2-1.8 4.4-3.7 4.4-3.7 0.5-0.4 0.9-0.7 1.2-1.2 0.6-0.8 1-1.6 1-2.5 0-1-0.3-2-0.9-2.8-0.8-0.9-1.6-1.4-3.2-1.4s-2.5 0.9-3.1 1.9-0.6 2.2-0.6 3.3h-6c0-4.2 1.1-6.8 3.4-8.4 1.6-1.1 3.6-1.6 5.9-1.6 3 0 5.5 0.6 7.7 2.2z m-8.1 22.9c2.1 0.1 3.7 1.6 3.6 3.8s-1.7 3.6-3.8 3.5c-2.1-0.1-3.6-1.5-3.5-3.7s1.7-3.7 3.7-3.6z' })
                )
            );
        }
    }]);

    return IoHelp;
}(React.Component);

exports.default = IoHelp;
module.exports = exports['default'];