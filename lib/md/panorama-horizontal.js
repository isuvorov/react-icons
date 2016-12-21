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

var MdPanoramaHorizontal = function (_React$Component) {
    _inherits(MdPanoramaHorizontal, _React$Component);

    function MdPanoramaHorizontal() {
        _classCallCheck(this, MdPanoramaHorizontal);

        return _possibleConstructorReturn(this, (MdPanoramaHorizontal.__proto__ || Object.getPrototypeOf(MdPanoramaHorizontal)).apply(this, arguments));
    }

    _createClass(MdPanoramaHorizontal, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm35.7 6.6c0.6 0 0.9 0.4 0.9 1.1v24.6c0 0.7-0.3 1.1-0.9 1.1-0.2 0-0.3-0.1-0.5-0.2-4.9-1.8-10-2.7-15.2-2.7s-10.3 0.9-15.2 2.7c-0.2 0.1-0.4 0.2-0.5 0.2-0.6 0-0.9-0.5-0.9-1.1v-24.6c0-0.7 0.3-1.1 0.9-1.1 0.2 0 0.3 0.1 0.5 0.2 4.9 1.8 10 2.7 15.2 2.7s10.3-0.9 15.2-2.7c0.2-0.1 0.4-0.2 0.5-0.2z m-2.3 4.3c-4.3 1.4-8.9 1.9-13.4 1.9s-9.1-0.6-13.4-1.9v18.2c4.3-1.3 8.9-1.9 13.4-1.9s9.1 0.6 13.4 1.9v-18.2z' })
                )
            );
        }
    }]);

    return MdPanoramaHorizontal;
}(React.Component);

exports.default = MdPanoramaHorizontal;
module.exports = exports['default'];