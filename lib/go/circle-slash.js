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

var GoCircleSlash = function (_React$Component) {
    _inherits(GoCircleSlash, _React$Component);

    function GoCircleSlash() {
        _classCallCheck(this, GoCircleSlash);

        return _possibleConstructorReturn(this, (GoCircleSlash.__proto__ || Object.getPrototypeOf(GoCircleSlash)).apply(this, arguments));
    }

    _createClass(GoCircleSlash, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20 7.5c-6.9 0-12.5 5.6-12.5 12.5 0 6.9 5.6 12.5 12.5 12.5 6.9 0 12.5-5.6 12.5-12.5 0-6.9-5.6-12.5-12.5-12.5z m0 5c1.1 0 2.1 0.2 3 0.6l-9.9 9.9c-0.4-0.9-0.6-1.9-0.6-3 0-4.1 3.4-7.5 7.5-7.5z m0 15c-1.1 0-2.1-0.2-3.1-0.7l9.9-9.8c0.5 0.9 0.7 1.9 0.7 3 0 4.1-3.4 7.5-7.5 7.5z' })
                )
            );
        }
    }]);

    return GoCircleSlash;
}(React.Component);

exports.default = GoCircleSlash;
module.exports = exports['default'];