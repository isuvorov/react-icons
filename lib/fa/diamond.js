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

var FaDiamond = function (_React$Component) {
    _inherits(FaDiamond, _React$Component);

    function FaDiamond() {
        _classCallCheck(this, FaDiamond);

        return _possibleConstructorReturn(this, (FaDiamond.__proto__ || Object.getPrototypeOf(FaDiamond)).apply(this, arguments));
    }

    _createClass(FaDiamond, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm4.1 17.5l12.1 12.9-5.8-12.9h-6.3z m15.8 15l6.7-15h-13.5z m-9.5-17.5l4-7.4h-5.1l-5.6 7.4h6.7z m13.1 15.4l12.1-12.9h-6.2z m-10.2-15.4h13.2l-4-7.4h-5.3z m16 0h6.7l-5.6-7.4h-5.1z m2.7-9.4l7.5 9.9q0.3 0.4 0.3 0.8t-0.4 0.8l-18.6 19.9q-0.4 0.4-0.9 0.4t-0.9-0.4l-18.7-19.9q-0.3-0.3-0.3-0.8t0.3-0.8l7.4-9.9q0.4-0.5 1-0.5h22.4q0.6 0 0.9 0.5z' })
                )
            );
        }
    }]);

    return FaDiamond;
}(React.Component);

exports.default = FaDiamond;
module.exports = exports['default'];