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

var GoGear = function (_React$Component) {
    _inherits(GoGear, _React$Component);

    function GoGear() {
        _classCallCheck(this, GoGear);

        return _possibleConstructorReturn(this, (GoGear.__proto__ || Object.getPrototypeOf(GoGear)).apply(this, arguments));
    }

    _createClass(GoGear, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20 13.7c-3.5 0-6.3 2.8-6.3 6.3 0 3.5 2.8 6.3 6.3 6.3 3.5 0 6.3-2.8 6.3-6.3 0-3.5-2.8-6.3-6.3-6.3z m12.7 9.9l-1.2 2.8 2.3 4.5-2.8 2.8-4.6-2.2-2.7 1.2-1.4 4.2-0.2 0.6h-4l-1.7-4.8-2.8-1.2-4.5 2.3-2.8-2.8 2.2-4.6-1.2-2.7-4.8-1.6v-4l4.8-1.7 1.2-2.8-2.1-4-0.2-0.5 2.8-2.8 4.6 2.2 2.7-1.2 1.4-4.2 0.2-0.6h4l1.7 4.8 2.8 1.2 4.5-2.3 2.8 2.8-2.2 4.6 1.2 2.7 4.8 1.6v4l-4.8 1.7z' })
                )
            );
        }
    }]);

    return GoGear;
}(React.Component);

exports.default = GoGear;
module.exports = exports['default'];