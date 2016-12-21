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

var GoSteps = function (_React$Component) {
    _inherits(GoSteps, _React$Component);

    function GoSteps() {
        _classCallCheck(this, GoSteps);

        return _possibleConstructorReturn(this, (GoSteps.__proto__ || Object.getPrototypeOf(GoSteps)).apply(this, arguments));
    }

    _createClass(GoSteps, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm12.8 2.5c-2.9 0-5.3 3.9-5.3 8.8 0 2.6 0.7 5.5 1.3 9.9 0.5 3.4 1.8 6.3 4 6.3s3.7-1.9 3.7-5.4c0-1.2-1-3.1-1-4.7-0.1-2.9 1.9-4 1.9-6.7 0-4.9-1.7-8.2-4.6-8.2z m14.3 10c-2.9 0-4.6 3.3-4.6 8.2 0 2.7 2.1 3.8 2 6.7-0.1 1.6-1 3.5-1 4.7 0 3.5 1.4 5.4 3.6 5.4s3.5-2.9 4-6.3c0.7-4.4 1.4-7.3 1.4-9.9 0-4.9-2.4-8.8-5.4-8.8z' })
                )
            );
        }
    }]);

    return GoSteps;
}(React.Component);

exports.default = GoSteps;
module.exports = exports['default'];