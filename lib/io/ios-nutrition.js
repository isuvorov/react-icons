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

var IoIosNutrition = function (_React$Component) {
    _inherits(IoIosNutrition, _React$Component);

    function IoIosNutrition() {
        _classCallCheck(this, IoIosNutrition);

        return _possibleConstructorReturn(this, (IoIosNutrition.__proto__ || Object.getPrototypeOf(IoIosNutrition)).apply(this, arguments));
    }

    _createClass(IoIosNutrition, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm28 18.3c0.5 0.5 0.8 1 0.8 1.7 0 0.9-0.4 1.6-1.1 2s-3.9 3-8.2 6.1l-3-2.5c-0.3-0.2-0.6-0.2-0.8-0.1-0.2 0.2-0.2 0.5 0.1 0.8l2.2 2.8-8.9 6.5c-0.4 0.3-1 0.7-1.6 0.7-1.4 0-2.5-1.1-2.5-2.5 0-0.6 0.2-1.1 0.4-1.5 0.1-0.1 1.2-1.9 2.8-4.4l1.6 1.3c0.3 0.3 0.6 0.3 0.7 0.1 0.2-0.2 0.2-0.5 0-0.8l-1.6-1.8c2.1-3.3 4.7-7.5 6.6-10.4l2.8 2.3c0.3 0.2 0.6 0.2 0.8 0.1 0.1-0.2 0.1-0.5-0.1-0.8l-2.6-3.1c0.9-1.4 1.4-2.3 1.4-2.3 0.5-0.8 1.3-1.2 2.2-1.2 0.7 0 1.4 0.3 1.9 0.7l6.2 6.3z m7-7.4l-8 4.6-2.2-2.3 5.4-9.5 2.2 1.3-3.9 6.6 5.2-2.9z' })
                )
            );
        }
    }]);

    return IoIosNutrition;
}(React.Component);

exports.default = IoIosNutrition;
module.exports = exports['default'];