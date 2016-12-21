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

var MdCamera = function (_React$Component) {
    _inherits(MdCamera, _React$Component);

    function MdCamera() {
        _classCallCheck(this, MdCamera);

        return _possibleConstructorReturn(this, (MdCamera.__proto__ || Object.getPrototypeOf(MdCamera)).apply(this, arguments));
    }

    _createClass(MdCamera, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm16.4 36.3c2.7-4.7 5.3-9.4 8.1-14l6 10.6c-2.8 2.3-6.5 3.7-10.5 3.7-1.2 0-2.4-0.1-3.6-0.3z m-12.3-11.3h16.1l-6.1 10.5c-4.8-1.7-8.5-5.7-10-10.5z m3.6-16.2c2.8 4.8 5.6 9.7 8.5 14.6h-12.5c-0.3-1.1-0.3-2.2-0.3-3.4 0-4.4 1.6-8.3 4.3-11.2z m28.6 7.8c0.3 1.1 0.3 2.2 0.3 3.4 0 4.4-1.6 8.3-4.3 11.3l-8-13.8-0.5-0.9h12.5z m-0.4-1.6h-16.1l6.1-10.5c4.8 1.8 8.5 5.7 10 10.5z m-20.2 2.5l-0.2 0.2-6-10.6c2.8-2.3 6.5-3.7 10.5-3.7 1.3 0 2.4 0.1 3.6 0.4z' })
                )
            );
        }
    }]);

    return MdCamera;
}(React.Component);

exports.default = MdCamera;
module.exports = exports['default'];