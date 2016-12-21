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

var MdLocalLaundryService = function (_React$Component) {
    _inherits(MdLocalLaundryService, _React$Component);

    function MdLocalLaundryService() {
        _classCallCheck(this, MdLocalLaundryService);

        return _possibleConstructorReturn(this, (MdLocalLaundryService.__proto__ || Object.getPrototypeOf(MdLocalLaundryService)).apply(this, arguments));
    }

    _createClass(MdLocalLaundryService, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20 33.4q4.1 0 7.1-3t2.9-7-2.9-7.1-7.1-2.9-7.1 2.9-2.9 7.1 2.9 7 7.1 3z m-8.4-26.8q-0.7 0-1.1 0.5t-0.5 1.3 0.5 1.1 1.1 0.5 1.3-0.5 0.5-1.1-0.5-1.3-1.3-0.5z m5 0q-0.7 0-1.1 0.5t-0.5 1.3 0.5 1.1 1.1 0.5 1.3-0.5 0.5-1.1-0.5-1.3-1.3-0.5z m13.4-3.2q1.4 0 2.4 0.9t1 2.3v26.8q0 1.4-1 2.3t-2.4 0.9h-20q-1.4 0-2.4-0.9t-1-2.3v-26.8q0-1.4 1-2.3t2.4-0.9h20z m-14.7 24.6l9.4-9.4q1.9 1.9 1.9 4.7t-1.9 4.7-4.7 2-4.7-2z' })
                )
            );
        }
    }]);

    return MdLocalLaundryService;
}(React.Component);

exports.default = MdLocalLaundryService;
module.exports = exports['default'];