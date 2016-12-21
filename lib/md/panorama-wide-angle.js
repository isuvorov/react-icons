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

var MdPanoramaWideAngle = function (_React$Component) {
    _inherits(MdPanoramaWideAngle, _React$Component);

    function MdPanoramaWideAngle() {
        _classCallCheck(this, MdPanoramaWideAngle);

        return _possibleConstructorReturn(this, (MdPanoramaWideAngle.__proto__ || Object.getPrototypeOf(MdPanoramaWideAngle)).apply(this, arguments));
    }

    _createClass(MdPanoramaWideAngle, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20 6.6q6 0 13.3 1.3l1.5 0.2 0.4 1.5q1.4 5.2 1.4 10.4t-1.4 10.4l-0.4 1.5-1.5 0.2q-7.3 1.3-13.3 1.3t-13.3-1.3l-1.5-0.2-0.4-1.5q-1.4-5.2-1.4-10.4t1.4-10.4l0.4-1.5 1.5-0.2q7.3-1.3 13.3-1.3z m0 3.4q-5.5 0-12.2 1.1-1.2 4.4-1.2 8.9t1.2 8.9q6.7 1.1 12.2 1.1t12.2-1.1q1.2-4.4 1.2-8.9t-1.2-8.9q-6.7-1.1-12.2-1.1z' })
                )
            );
        }
    }]);

    return MdPanoramaWideAngle;
}(React.Component);

exports.default = MdPanoramaWideAngle;
module.exports = exports['default'];