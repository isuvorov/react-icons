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

var GoBeer = function (_React$Component) {
    _inherits(GoBeer, _React$Component);

    function GoBeer() {
        _classCallCheck(this, GoBeer);

        return _possibleConstructorReturn(this, (GoBeer.__proto__ || Object.getPrototypeOf(GoBeer)).apply(this, arguments));
    }

    _createClass(GoBeer, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm35 10h-7.5v-5c0-2.8-6.2-5-13.7-5s-13.8 2.2-13.8 5v30c0 2.8 6.2 5 13.8 5s13.7-2.2 13.7-5v-5h7.5s2.5-1.2 2.5-2.5v-15s-1.1-2.5-2.5-2.5z m-27.5 22.5h-2.5v-20h2.5v20z m7.5 2.5h-2.5v-20h2.5v20z m7.5-2.5h-2.5v-20h2.5v20z m-8.7-25c-4.9 0-8.8-1.1-8.8-2.5s3.9-2.5 8.8-2.5 8.7 1.1 8.7 2.5-3.9 2.5-8.7 2.5z m18.7 17.5h-5v-10h5v10z' })
                )
            );
        }
    }]);

    return GoBeer;
}(React.Component);

exports.default = GoBeer;
module.exports = exports['default'];