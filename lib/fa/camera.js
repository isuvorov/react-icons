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

var FaCamera = function (_React$Component) {
    _inherits(FaCamera, _React$Component);

    function FaCamera() {
        _classCallCheck(this, FaCamera);

        return _possibleConstructorReturn(this, (FaCamera.__proto__ || Object.getPrototypeOf(FaCamera)).apply(this, arguments));
    }

    _createClass(FaCamera, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm19.9 15.3q2.5 0 4.3 1.8t1.7 4.2-1.7 4.3-4.3 1.7-4.2-1.7-1.7-4.3 1.7-4.2 4.2-1.8z m14.7-8.6q2.2 0 3.7 1.6t1.6 3.7v18.6q0 2.2-1.6 3.8t-3.7 1.5h-29.3q-2.2 0-3.7-1.5t-1.6-3.8v-18.6q0-2.2 1.6-3.7t3.7-1.6h4.7l1-2.8q0.4-1 1.5-1.8t2.1-0.7h10.6q1.1 0 2.2 0.7t1.4 1.8l1.1 2.8h4.7z m-14.7 23.9q3.9 0 6.6-2.7t2.7-6.6-2.7-6.5-6.6-2.8-6.5 2.8-2.8 6.5 2.8 6.6 6.5 2.7z' })
                )
            );
        }
    }]);

    return FaCamera;
}(React.Component);

exports.default = FaCamera;
module.exports = exports['default'];